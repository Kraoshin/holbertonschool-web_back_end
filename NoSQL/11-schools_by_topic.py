#!/usr/bin/env python3
""" Schools by topic """
from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017/")
db = client.mydatabase
mongo_collection = db.school

def schools_by_topic(mongo_collection, topic: str):
    """ returns the list of school having a specific topic """
    return mongo_collection.find({"topics": topic})
