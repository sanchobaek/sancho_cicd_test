exports.handler = async (event) => {
    console.log('Event received:', JSON.stringify(event, null, 2));
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: '안녕하세요! Lambda 함수가 정상 작동합니다.',
            timestamp: new Date().toISOString(),
            event: event
        })
    };
    
    console.log('Response:', JSON.stringify(response, null, 2));
    return response;
};