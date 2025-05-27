FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# this will be copied to default static files directory
COPY copymetocontainer.html /usr/share/nginx/html/


RUN mkdir /usr/share/nginx/images
COPY image.png /usr/share/nginx/images

ENTRYPOINT ["nginx", "-g", "daemon off;"]