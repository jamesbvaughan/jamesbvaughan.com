pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker run --rm --volume="$PWD:/srv/jekyll" jekyll/jekyll:3.4.3 jekyll build'
      }
    }
    stage('Test') {
      steps {
        sh 'grep -qs "things james does" _site/index.html'
      }
    }
    stage('Deploy') {
      steps {
        sh 'cp -r _site/* /var/www/jamesbvaughan.com
      }
    }
  }
}
