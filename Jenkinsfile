pipeline{
    agent any
    stages{
        stage('cria docker imagem'){
            steps{
                sh 'docker compose up -d ' 
            }
               
        }
        stage('sleep 20'){
            steps{
                sh 'sleep 20 ' 
            }
               
        }
    }
}