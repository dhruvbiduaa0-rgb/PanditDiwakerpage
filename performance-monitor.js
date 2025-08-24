// Performance Monitoring Script
// Add this to your HTML to monitor performance improvements

(function() {
    'use strict';
    
    // Wait for page load to complete
    window.addEventListener('load', function() {
        // Use Performance API if available
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            
            if (perfData) {
                const metrics = {
                    // Core Web Vitals approximations
                    loadTime: perfData.loadEventEnd - perfData.fetchStart,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
                    firstByte: perfData.responseStart - perfData.fetchStart,
                    
                    // Resource timing
                    dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
                    tcpConnect: perfData.connectEnd - perfData.connectStart,
                    serverResponse: perfData.responseEnd - perfData.responseStart,
                    domProcessing: perfData.domInteractive - perfData.responseEnd,
                    
                    // Transfer sizes
                    transferSize: perfData.transferSize || 0,
                    encodedBodySize: perfData.encodedBodySize || 0,
                    decodedBodySize: perfData.decodedBodySize || 0
                };
                
                // Log metrics for analysis
                console.group('🚀 Performance Metrics');
                console.log('Total Load Time:', Math.round(metrics.loadTime) + 'ms');
                console.log('DOM Content Loaded:', Math.round(metrics.domContentLoaded) + 'ms');
                console.log('Time to First Byte:', Math.round(metrics.firstByte) + 'ms');
                console.log('DNS Lookup:', Math.round(metrics.dnsLookup) + 'ms');
                console.log('TCP Connect:', Math.round(metrics.tcpConnect) + 'ms');
                console.log('Server Response:', Math.round(metrics.serverResponse) + 'ms');
                console.log('DOM Processing:', Math.round(metrics.domProcessing) + 'ms');
                
                if (metrics.transferSize > 0) {
                    console.log('Transfer Size:', (metrics.transferSize / 1024).toFixed(2) + 'KB');
                    console.log('Encoded Body Size:', (metrics.encodedBodySize / 1024).toFixed(2) + 'KB');
                    console.log('Decoded Body Size:', (metrics.decodedBodySize / 1024).toFixed(2) + 'KB');
                    
                    if (metrics.encodedBodySize < metrics.decodedBodySize) {
                        const compressionRatio = ((metrics.decodedBodySize - metrics.encodedBodySize) / metrics.decodedBodySize * 100).toFixed(1);
                        console.log('✅ Compression Ratio:', compressionRatio + '%');
                    }
                }
                console.groupEnd();
                
                // Performance recommendations
                const recommendations = [];
                
                if (metrics.loadTime > 3000) {
                    recommendations.push('Consider further image optimization or lazy loading');
                }
                
                if (metrics.firstByte > 800) {
                    recommendations.push('Server response time could be improved');
                }
                
                if (metrics.dnsLookup > 100) {
                    recommendations.push('Consider using DNS prefetch for external resources');
                }
                
                if (recommendations.length > 0) {
                    console.group('💡 Performance Recommendations');
                    recommendations.forEach(rec => console.log('•', rec));
                    console.groupEnd();
                }
                
                // Measure resource loading
                setTimeout(() => {
                    const resources = performance.getEntriesByType('resource');
                    const imageResources = resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i));
                    const scriptResources = resources.filter(r => r.name.match(/\.js$/i));
                    const styleResources = resources.filter(r => r.name.match(/\.css$/i));
                    
                    console.group('📊 Resource Analysis');
                    console.log('Total Resources:', resources.length);
                    console.log('Images:', imageResources.length);
                    console.log('Scripts:', scriptResources.length);
                    console.log('Stylesheets:', styleResources.length);
                    
                    // Check for render-blocking resources
                    const renderBlocking = resources.filter(r => 
                        r.renderBlockingStatus === 'blocking' || 
                        (r.name.includes('.css') && r.responseEnd - r.startTime > 100)
                    );
                    
                    if (renderBlocking.length > 0) {
                        console.warn('Potential render-blocking resources:', renderBlocking.length);
                    }
                    
                    console.groupEnd();
                }, 1000);
            }
        }
        
        // Measure Largest Contentful Paint (LCP)
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('🎯 Largest Contentful Paint:', Math.round(lastEntry.startTime) + 'ms');
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
                
                // Stop observing after 10 seconds
                setTimeout(() => lcpObserver.disconnect(), 10000);
            } catch (e) {
                // LCP not supported in this browser
            }
            
            // Measure Cumulative Layout Shift (CLS)
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    }
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
                
                // Report CLS after page interaction
                setTimeout(() => {
                    clsObserver.disconnect();
                    console.log('📐 Cumulative Layout Shift:', clsValue.toFixed(4));
                    if (clsValue > 0.1) {
                        console.warn('⚠️  High CLS detected. Consider reserving space for dynamic content.');
                    }
                }, 5000);
            } catch (e) {
                // CLS not supported in this browser
            }
        }
    });
    
    // Monitor memory usage (if available)
    if ('memory' in performance) {
        setInterval(() => {
            const memory = performance.memory;
            if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
                console.warn('⚠️  High memory usage detected');
            }
        }, 30000);
    }
})();

// Export for manual testing
window.runPerformanceAudit = function() {
    console.clear();
    window.location.reload();
};