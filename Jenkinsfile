pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
    }
  }
  environment {
    JEKYLL_UID = '114'
    JEKYLL_GID = '119'
    VERBOSE = 'true'
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
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
