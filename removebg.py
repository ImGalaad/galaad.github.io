import cv2
import numpy as np

def remove_black_background(path):
    image = cv2.imread(path, cv2.IMREAD_UNCHANGED)

    if image.shape[2] == 3:
        image = cv2.cvtColor(image, cv2.COLOR_BGR2BGRA)

    threshold = 20

    for i in range(image.shape[0]):
        for j in range(image.shape[1]):
            b, g, r, a = image[i, j]

            brightness = (int(b) + int(g) + int(r)) / 3.0

            if brightness < threshold:
                image[i, j, 3] = 0
            # Fade
            elif brightness < 50:
                fade_factor = (brightness - threshold) / (50 - threshold)
                image[i, j, 3] = int(255 * fade_factor)

    cv2.imwrite('src/assets/images/anya-pointers.png', image)


remove_black_background('src/assets/images/anya-pointers-base.jpg')
