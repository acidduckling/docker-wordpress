FROM wordpress:latest

WORKDIR /etc/apache2/mods-enabled

# Enable the proxy modules by creating symlinks for the available modules to the enabled directory of Apache
RUN ln -s ../mods-available/proxy.* .
RUN ln -s ../mods-available/proxy_http* .

WORKDIR /var/www/html
