from django.shortcuts import render
from django.http import HttpResponse
from form.models import Form

BASE_TEMPLATE_DIR = 'form'

# Create your views here.
def index(request):
    data = Form.objects.all()
    return render(request, f'{BASE_TEMPLATE_DIR}/index.html')


def checkuser(request):
    username = request.GET['username']
    
    if len(Form.objects.filter(username=username)):
        return HttpResponse('yes')
    else:
        return HttpResponse('no')


def submit(request):
    username = request.POST.get('username')
    name = request.POST.get('name')
    skills = request.POST.get('skills')
    Form.objects.create(username=username, name=name, skills=skills)
    data = Form.objects.all()
    return render(request, f'{BASE_TEMPLATE_DIR}/submit.html', { 'data': data })
