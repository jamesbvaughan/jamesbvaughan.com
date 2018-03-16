pipeline {
  agent {
    docker {
      image 'jekyll/builder:3.4'
      args '--volume="$PWD:/srv/jekyll" --user 1000'
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
