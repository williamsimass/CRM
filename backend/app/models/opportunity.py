from app import db

class Opportunity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    value = db.Column(db.Float)
    stage = db.Column(db.String(50), default='Prospecção') # Prospecção, Negociação, Fechado
    contact_id = db.Column(db.Integer, db.ForeignKey('contact.id'))

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'value': self.value,
            'stage': self.stage,
            'contact_id': self.contact_id
        }
