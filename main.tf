terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  
  backend "s3" {
    # GitHub Actions에서 동적으로 설정됨
  }
}

provider "aws" {
  region = var.aws_region
}

# Lambda 함수 코드를 zip으로 패키징
data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "lambda"
  output_path = "lambda-function.zip"
}

# Lambda 함수 생성
resource "aws_lambda_function" "test_function" {
  filename         = "lambda-function.zip"
  function_name    = "sancho-test-lambda2"
  role            = "arn:aws:iam::975049962487:role/sancho_lambda_terraform"
  handler         = "index.handler"
  runtime         = "nodejs18.x"
  timeout         = 60
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256

  tags = {
    role = "sancho-ecr-cicd"
    username     = "sancho"
  }
}

# Lambda 함수 출력
output "lambda_function_name" {
  value = aws_lambda_function.test_function.function_name
}

output "lambda_function_arn" {
  value = aws_lambda_function.test_function.arn
}