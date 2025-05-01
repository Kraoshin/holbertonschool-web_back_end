#!/usr/bin/env python3
""" Update a document in Python """
from pymongo import MongoClient
from typing import List


client = MongoClient("mongodb://localhost:27017/")
db = client.mydatabase
mongo_collection = db.school

def update_topics(mongo_collection, name:str, topics: List[str]):
    """ Changes all topics of a school document based on the name """
    return mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
