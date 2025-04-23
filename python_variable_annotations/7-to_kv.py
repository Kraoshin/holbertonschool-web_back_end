#!/usr/bin/env python3
""" Type annotation for to_kv function """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple with the string and the square of the int/float.

    Args:
    k (str)
    v (Union[int, float])

    Returns:
    Tuple[str, float]: A tuple where the first element is the string
    and the second element is the square of the number.
    """
    return (k, float(v ** 2))
