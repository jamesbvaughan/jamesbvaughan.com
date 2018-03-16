pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'echo PWD=$PWD'
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
