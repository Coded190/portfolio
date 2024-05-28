from django.shortcuts import render, get_object_or_404
from .models import Project, Tag

# Create your views here.
# Displays when we go to a specific root URL

def home(request):
    projects = Project.objects.all()    # Give access to all projects in the database
    tags = Tag.objects.all()
    return render(request, "home.html", {"projects": projects, "tags": tags})

def contact(request):
    return render(request, "contact.html")

def project(request, id):
    project = get_object_or_404(Project, pk=id)   # Get the project with the primary key of id or render a 404 page.
    return render(request, "project.html", {"project": project})
    