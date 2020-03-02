from rest_framework import serializers
from rest_framework.relations import HyperlinkedIdentityField

from .models import UserProfile, Category, Tag, Comment, Post


#   If add this class, add url field. Duplicate url with classname namespace! Check this!
# class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
#     url = serializers.HyperlinkedRelatedField(view_name='api:userprofile-detail', source='profile')
#     class Meta:
#         model = UserProfile
#         fields = ['id', 'username', 'email', url]


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'slug', 'parent_id']


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ['name', 'slug']


#  For add Author field need add UserProfileSerializer, see above
class PostSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Post
        fields = ['title', 'tease', 'body', 'created', 'category', 'tag', 'slug']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'body', 'created', 'like', 'dislike', 'id']
