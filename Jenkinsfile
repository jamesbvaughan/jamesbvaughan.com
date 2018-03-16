pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
      args '-e JEKYLL_UID=114'
    }
  }
  stages {
    stage('Build') {
      steps {
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
