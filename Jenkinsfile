pipeline {
  agent {
    docker {
      image 'jekyll/jekyll:3.4'
      args '--volume="$PWD:/srv/jekyll"'
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
