'use client';
import * as React from 'react';
import GlassIcons from '../pumki-ui/GlassIcons';
import { FileText, Book, Heart, Cloud, Edit, BarChart2 } from 'lucide-react';

export const GlassIconDemo = () => {
const items = [
    { icon: <FileText />, color: 'blue', label: 'Files' },
    { icon: <Book />, color: 'purple', label: 'Books' },
    { icon: <Heart />, color: 'red', label: 'Health' },
    { icon: <Cloud />, color: 'indigo', label: 'Weather' },
    { icon: <Edit />, color: 'orange', label: 'Notes' },
    { icon: <BarChart2 />, color: 'green', label: 'Stats' },
];
 
return (
    <div style={{ height: '600px', position: 'relative' }} className='mt-20'>
        <GlassIcons items={items} className="custom-class"/>
    </div>
);
};