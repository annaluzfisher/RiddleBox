import json


# def hello(event, context):
#     body = {
#         "message": "Go Serverless v3.0! Your function executed successfully!",
#         "input": event,
#     }

#     return {"statusCode": 200, "body": json.dumps(body)}


from serverless_wsgi import handle_request
from your_project_name.wsgi import application

def main(event, context):
    return handle_request(application, event, context)