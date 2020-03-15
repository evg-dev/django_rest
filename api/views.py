from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.generics import get_object_or_404

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


class PostByCategotyList(generics.ListAPIView):
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Post.objects.filter(category__slug=self.kwargs['category__slug'])


class PostByTagList(generics.ListAPIView):
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        return Post.objects.filter(tag__slug=self.kwargs['tag__slug'])
