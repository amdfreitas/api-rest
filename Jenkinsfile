pipeline{
    agent main
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