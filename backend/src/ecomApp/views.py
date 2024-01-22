from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .products import products

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
  return Response({"message":"Hello"})

@api_view(['GET'])
def getProducts(request):
  return Response(products)
