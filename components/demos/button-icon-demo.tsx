'use client';
import * as React from 'react';
import { IconButton } from '@/components/pumki-ui/buttons/icon';
import { Heart } from 'lucide-react';

export const IconButtonDemo = () => {
  const [active, setActive] = React.useState(false);
 
return (
    <IconButton
        icon={Heart}
        active={active}
        onClick={() => setActive(!active)}
        color={[239, 68, 68]}
    />
);
};