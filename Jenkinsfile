pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
    }
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
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
