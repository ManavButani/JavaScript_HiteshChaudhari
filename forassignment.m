img = imread('img2.png');

g1 = imnoise(img, 'gaussian');
g2 = imnoise(img, 'gaussian', 0.3, 0.01);
p1 = imnoise(img, 'poisson');
sp1 = imnoise(img, 'salt & pepper');
sp2 = imnoise(img, 'salt & pepper', 0.2);
s1 = imnoise(img, 'speckle');
s2 = imnoise(img, 'speckle' , 0.09);

% arithmetic mean filter
h = fspecial('average',3);
arithmetic_mean_filter = imfilter(g1, h);

% geometric mean filter
h1 = fspecial('average',2);
geometric_mean_filter = imfilter(log(im2double(g1)), h1, 'replicate');
geometric_mean_filter = exp(geometric_mean_filter);
geometric_mean_filter = geometric_mean_filter .^ (1/numel(h1));

% meadian_filter
meadian_filter = medfilt3(sp1);

% harmonic_mean_filter
harmonic_mean_filter = (3*3) ./ imfilter(1 ./ (g1 + eps), ones(3,3), 'replicate');

% local_noise_reduction_filter
local_noise_reduction_filter = wiener2(im2gray(g1));

subplot(2,3,1), imshowpair(g1, arithmetic_mean_filter, 'montage'), title("arithmetic")
subplot(2,3,2), imshowpair(g1, geometric_mean_filter, 'montage'), title("geometric")
subplot(2,3,3), imshowpair(sp1, meadian_filter, 'montage'), title("meadian")
subplot(2,3,4), imshowpair(g2, harmonic_mean_filter, 'montage'), title("harmonic")
subplot(2,3,5), imshowpair(im2gray(g1), local_noise_reduction_filter, 'montage'), title("localNoise")
