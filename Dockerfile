FROM ruby:2.4-alpine

RUN gem install bundler

WORKDIR /site
