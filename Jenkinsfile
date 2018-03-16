pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
      args '-u 1000:1000'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'id'
        sh 'jekyll build'
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
