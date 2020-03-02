from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import TagSerializer, PostSerializer, CategorySerializer
from .models import Tag, Post, Category


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
