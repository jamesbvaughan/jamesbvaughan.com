FROM ruby:2.4-alpine

WORKDIR /site

RUN gem install bundler
