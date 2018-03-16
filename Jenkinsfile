pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'cat /etc/passwd'
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
