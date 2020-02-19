from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserProfile, Post, Category, Tag, Comment


# Register your models here.


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('name',),
    }
    list_display = ('name', 'slug', 'parent_id')


class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('name',),
    }
    list_display = ('name', 'slug')


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {
        'slug': ('title',),
    }
    list_display = ('title', 'category', 'draft', 'created',
                    'published')
    list_display_links = ('title',)
    list_filter = ('created', 'published', 'draft')
    search_fields = ('title', 'tease', 'body')
    exclude = ('created',)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('is_approved', 'post', 'created')
    date_hierarchy = 'created'


admin.site.register(UserProfile, UserAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Comment, CommentAdmin)
