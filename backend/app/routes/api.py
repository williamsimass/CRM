from flask import Blueprint, jsonify, request
from app import db
from app.models.contact import Contact
from app.models.opportunity import Opportunity

api_bp = Blueprint('api', __name__)

@api_bp.route('/contacts', methods=['GET'])
def get_contacts():
    contacts = Contact.query.all()
    return jsonify([c.to_dict() for c in contacts])

@api_bp.route('/contacts', methods=['POST'])
def add_contact():
    data = request.get_json()
    new_contact = Contact(
        name=data['name'],
        email=data['email'],
        phone=data.get('phone'),
        company=data.get('company')
    )
    db.session.add(new_contact)
    db.session.commit()
    return jsonify(new_contact.to_dict()), 201

@api_bp.route('/opportunities', methods=['GET'])
def get_opportunities():
    opportunities = Opportunity.query.all()
    return jsonify([o.to_dict() for o in opportunities])

@api_bp.route('/opportunities', methods=['POST'])
def add_opportunity():
    data = request.get_json()
    new_opportunity = Opportunity(
        title=data['title'],
        value=data.get('value'),
        stage=data.get('stage', 'Prospecção'),
        contact_id=data.get('contact_id')
    )
    db.session.add(new_opportunity)
    db.session.commit()
    return jsonify(new_opportunity.to_dict()), 201
