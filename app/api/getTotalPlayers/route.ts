import { pusherServer } from '@/app/lib/pusher';
import { NextResponse } from 'next/server';

// API Route to get the number of online users
export async function POST(request: Request) {
    const attributes = 'subscription_count,user_count';
    // All Online users will subscribe to this channel
    const channels = ['online_users'];

    const res = await pusherServer.trigger(channels, 'get-total-users', { message: 'Hello World' }, { info: attributes });

    if (res.status === 200) {
        const body = await res.json();
        const channelsInfo = body.channels;

        return NextResponse.json({
            body,
            channelsInfo,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: '0',
            },
        });
    } else {
        return NextResponse.json({ message: 'Failed' });
    }
}
