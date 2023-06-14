import { Carousel, Row, Typography } from 'antd';
import { type CarouselItem } from '../types/carouselHeader';

const { Title, Paragraph, Link } = Typography;

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
};

interface CarouselHeaderProps {
    items: CarouselItem[];
    autoplay: boolean;
    backgroundOpacity?: number;
}

const CarouselHeader = ({ items, autoplay, backgroundOpacity }: CarouselHeaderProps) => {
    return (
        <Carousel autoplay={autoplay}>
            {items.map((item, i) => (
                <div key={i}>
                    <div style={{ height: '400px' }}>
                        <div
                            style={{
                                backgroundImage: `url(${item.image})`,
                                ...contentStyle,
                            }}
                        >
                            <Title
                                level={2}
                                style={{
                                    color: 'white',
                                    lineHeight: '400px',
                                    backgroundColor: `rgba(0,0,0, ${backgroundOpacity ?? 0.4})`,
                                }}
                            >
                                {item.title}
                            </Title>
                            <Paragraph
                                style={{
                                    color: 'white',
                                    transform: 'translate(0, -200px)',
                                }}
                            >
                                {item.description}
                            </Paragraph>
                            {item.readMoreLink && (
                                <Row justify={'center'}>
                                    <Link
                                        style={{
                                            color: 'white',
                                            position: 'absolute',
                                            top: '75%',
                                            border: '1px solid white',
                                            padding: '0.5rem',
                                        }}
                                        href={item.readMoreLink}
                                    >
                                        READ MORE
                                    </Link>
                                </Row>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselHeader;

export { type CarouselHeaderProps };
