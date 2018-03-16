pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        echo 'Installing Build Dependencies..'
        sh 'gem install bundler'
        sh 'bundle install'
      }
    }
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'bundle exec jekyll build'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}
