"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/sign_up', methods=['POST'])
def sign_up_user():

    body_params = request.get_json()
    print (body_params)
    name = body_params.get("name", None)
    last_name = body_params.get("lastName", None)
    email = body_params.get("email", None)
    password = body_params.get("password", None)   

    user1 = User(name=name, last_name=last_name, email=email, password=password)
    db.session.add(user1)
    db.session.commit()
    return jsonify({"msg": "user succesfully created"}), 200
    
@api.route("/sign_in", methods=["POST"])
def sign_in():
    body_params = request.get_json()
    email = body_params.get("email", None)
    password = body_params.get("password", None)
    if email == None or password == None:
        return jsonify({"msg": "Bad email or password"}), 401

    user = User.query.filter_by(email=email).one_or_none()
    print(user.serialize())
    if not user or not user.check_password(password):
        return jsonify("Your credentials are wrong, please try again"), 401

    access_token = create_access_token(identity=user.serialize())
    return jsonify(access_token=access_token)

@api.route("/me", methods=["GET", "PUT"])
@jwt_required()
def user_profile():
    identity = get_jwt_identity()
    user = current_user(get_jwt_identity())

    return jsonify(user.serialize())


def current_user(identity):
    print(identity["id"])
    return User.query.get(identity["id"])