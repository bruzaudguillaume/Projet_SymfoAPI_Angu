FROM php:8.0.13-cli

RUN apt-get update \
    &&  apt-get install -y --no-install-recommends \
        locales apt-utils git libicu-dev g++ libpng-dev libxml2-dev libzip-dev libonig-dev libxslt-dev unzip libpq-dev nodejs npm wget \
        apt-transport-https lsb-release ca-certificates

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen  \
    &&  echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen \
    &&  locale-gen

RUN curl -sS https://getcomposer.org/installer | php -- \
    &&  mv composer.phar /usr/local/bin/composer

RUN curl -sS https://get.symfony.com/cli/installer | bash \
    &&  mv /root/.symfony5/bin/symfony /usr/local/bin

# create element (seems to not work because have to be install into the project)
#RUN composer require symfony/maker-bundle --dev

# allow to interact with database (seems to not work because have to be install into the project)
#RUN composer require symfony/orm-pack

# avoir error when git isnt setup
RUN git config --global --add safe.directory /var/www/html/Books

RUN git config --global user.email "you@example.com" \
    &&  git config --global user.name "Your Name" \
    &&  git config --global --add safe.directory /var/www/html/Books

RUN docker-php-ext-configure \
            intl \
    &&  docker-php-ext-install \
            pdo pdo_mysql pdo_pgsql opcache intl zip calendar dom mbstring gd xsl

RUN pecl install apcu && docker-php-ext-enable apcu

RUN npm install --global yarn

CMD tail -f /dev/null

WORKDIR /app/back