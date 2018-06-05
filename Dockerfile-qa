FROM nginx:1.14-alpine
COPY . /usr/share/nginx/html/
COPY env/qa/*.png /usr/share/nginx/html/resources/img/
RUN sed -i 's/${env}/qa/' /usr/share/nginx/html/index.html