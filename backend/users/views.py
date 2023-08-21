# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import User
from .serializers import *
# Create your views here.

@api_view(['GET'])
def get_users(request):
  # return Response('Hello')
  # data = User.objects.all()
  data = [{'username': 'anna','email': 'myemail@email.com'}]
  serializer = UserSerializer(data, context={'request': request}, many=True)

  return Response(serializer.data)