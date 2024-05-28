from django.contrib import admin
from .models import Tag, Project, ProjectImage

# Register your models here.
# Custom registration for the models.

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


class ProjectAdmin(admin.ModelAdmin):
    # Shows the title and link fo the projects.
    list_display = ("title","link",)
    inlines = [ProjectImageInline]
    search_fields = ("title", "description",)
    list_filter = ("tags",)
    
class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)
    
admin.site.register(Tag, TagAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)