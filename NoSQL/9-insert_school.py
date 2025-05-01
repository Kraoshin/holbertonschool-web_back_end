#!/usr/bin/env python3
""" Insert a document in Python """

from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")
db = client.mydatabase
mongo_collection = db.school

def insert_school(mongo_collection, **kwargs):
    """ inserts a new document in a collection based on kwargs """
    return mongo_collection.insert_one(kwargs).inserted_id
