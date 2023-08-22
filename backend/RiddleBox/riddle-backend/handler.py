import json
# import sys
# sys.path.append("/var/task/")
import unzip_requirements
from serverless_wsgi import handle_request
from wsgi import application

def main(event, context):
    return handle_request(application, event, context)