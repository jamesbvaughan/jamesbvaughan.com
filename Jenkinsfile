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
        sh 'whoami'
        sh 'echo JEKYLL_UID=$JEKYLL_UID'
        sh 'echo JEKYLL_GID=$JEKYLL_GID'
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
