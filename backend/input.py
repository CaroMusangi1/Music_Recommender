from marshmallow import Schema, fields

class CreateUserSchema(Schema):
    username = fields.String(required=True)
    password = fields.String(required=True)

class LikeSongSchema(Schema):
    user_id = fields.Integer(required=True)
    song_id = fields.Integer(required=True)
