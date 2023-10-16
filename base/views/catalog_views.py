from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from base.models import TypeProduct, Product
from base.serializers import TypeProductSerializer, ProductSerializer

from rest_framework import status



@api_view(['GET'])
def getCatalog(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''

    typeProducts = TypeProduct.objects.filter(
        name__icontains=query)

    page = request.query_params.get('page')
    paginator = Paginator(typeProducts, 5)

    try:
        typeProducts = paginator.page(page)
    except PageNotAnInteger:
        typeProducts = paginator.page(1)
    except EmptyPage:
        typeProducts = paginator.page(paginator.num_pages)

    if page == None:
        page = 1

    page = int(page)
    print('Page:', page)
    serializer = TypeProductSerializer(typeProducts, many=True)
    return Response({'typeProducts': serializer.data, 'page': page, 'pages': paginator.num_pages})


@api_view(['GET'])
def getCatalogProduct(request, pk):
       # Получаем объект TypeProduct по _id
    catalog = TypeProduct.objects.get(_id=pk)

    # Получаем все продукты, связанные с данным каталогом
    products = Product.objects.filter(type_product=catalog)

    # Сериализуем продукты
    serializer = ProductSerializer(products, many=True)

    # Возвращаем данные в виде JSON
    return Response(serializer.data)