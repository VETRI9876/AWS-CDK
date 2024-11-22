import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Update the visibilityTimeout to 600 seconds
    const queue = new sqs.Queue(this, 'MyCdkProjectQueue', {
      visibilityTimeout: cdk.Duration.seconds(600) // Updated value
    });
  }
}
