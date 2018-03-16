pipeline {
  agent {
    docker {
      image 'jekyll/stable'
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
