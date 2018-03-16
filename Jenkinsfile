pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4.3'
    }
  }
  environment {
    TEST_VAR = 'test'
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building..'
        sh 'echo TEST_VAR=$TEST_VAR'
        sh 'echo JEKYLL_UID=$JEKYLL_UID'
        sh 'echo JEKYLL_GID=$JEKYLL_GID'
        sh 'id'
        sh 'whoami'
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
