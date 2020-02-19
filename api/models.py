from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext as _

from django_rest import settings


class UserProfile(AbstractUser):
    pass


class Category(models.Model):
    name = models.CharField(_('Name'), unique=True, max_length=30)
    slug = models.SlugField(_('Category slug'), unique=True)
    parent_id = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True)


class Tag(models.Model):
    name = models.CharField(_('Name'), max_length=30)
    slug = models.SlugField(_('Tag slug'), unique=True)


class Post(models.Model):
    title = models.CharField(_('Title'), max_length=30)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, related_name=_('entries'), on_delete=models.PROTECT, blank=False)
    tag = models.ManyToManyField(Tag, related_name=_('metategs'), blank=True)
    slug = models.SlugField(_('Post slug'), unique=True)
    tease = models.TextField(_('Tease'))
    body = models.TextField()
    draft = models.BooleanField(_('Draft'), default=True)
    is_approved = models.BooleanField(_('Approved'), default=False)
    created = models.DateTimeField(_('Date of creation'), default=datetime.now)
    updated = models.DateTimeField(_('Date of creation'), default=datetime.now)
    published = models.DateTimeField(_('Date of publication'), default=datetime.now)


class Comment(models.Model):
    post = models.ForeignKey(Post, verbose_name=_('related post'), on_delete=models.CASCADE, )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    body = models.TextField(_('Message:'))
    created = models.DateTimeField(_('comment created'), default=datetime.now)
    updated = models.DateTimeField(_('comment updated'), default=datetime.now)
    is_approved = models.BooleanField(_('Approved'), default=False)
    like = models.IntegerField(_('Likes'), default=0)
    dislike = models.IntegerField(_('Dislikes'), default=0)
