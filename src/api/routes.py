"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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

    return jsonify({"msg": "El usuario ha sido creado exitosamente :) :O :O !!!"}), 200 